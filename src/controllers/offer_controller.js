const Offer = require("../models/offer_model");

exports.getOffers = async (req, res) => {
    const offers = await Offer.find();
    res.json(offers);
};

exports.getBestDiscount = async (req, res) => {
    const { amount, instrument, bank } = req.body;

    const offers = await Offer.find({ instrument, bank });

    let bestDiscount = 0;
    let bestOffer = null;

    offers.forEach((offer) => {
        let discount = 0;

        if (offer.discountType === "PERCENTAGE") {
            discount = Math.min((amount * offer.discountValue) / 100, offer.maxCap);
        } else if (offer.discountType === "FLAT") {
            discount = offer.discountValue;
        }

        if (discount > bestDiscount) {
            bestDiscount = discount;
            bestOffer = offer;
        }
    });
    if (offers.length === 0) {
        return res.json({
            bestOfferId: null,
            discountAmount: 0,
            message: "No applicable offers for this payment instrument or bank"
        });
    }
    else{
        res.json({
            bestOfferId: bestOffer?.offerId || null,
            discountAmount: bestDiscount
        });
    }
};

exports.addOffer = async (req, res) => {
    try {
        const offerData = req.body;

        const offer = await Offer.findOneAndUpdate(
            { offerId: offerData.offerId }, // match existing
            offerData,                      // update with new data
            { upsert: true, new: true }     // create if not exists
        );

        res.status(201).json({
            message: "Offer added/updated successfully",
            offer
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to add offer" });
    }
};



// Part 2 CreateOffer API

exports.createOffers = async (req, res) => {
    try {
        const  OfferAPIResponse  = req.body.OfferApiResponse;

        if (!OfferAPIResponse) {
            return res.status(400).json({
                error: "OfferAPIResponse missing"
            });
        }

        const extractedOffers = extractOffers(OfferAPIResponse);

        let noOfOffersIdentified = extractedOffers.length;
        let noOfNewOffersCreated = 0;

        for (const offer of extractedOffers) {
            const exists = await Offer.findOne({ offerId: offer.offerId });

            if (!exists) {
                await Offer.create(offer);
                noOfNewOffersCreated++;
            }
        }
        return res.json({
            "noOfOffersIdentified" : noOfOffersIdentified,
            "noOfNewOffersCreated" : noOfNewOffersCreated
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error processing Flipkart offer data" });
    }
};


function extractOffers(apiResponse) {

    if (apiResponse.offers && Array.isArray(apiResponse.offers)) {
        return apiResponse.offers;
    }

    return [];
}


