import express from 'express';
import * as results from './results.js';

const router = express.Router();

router.get('/v2/personal/identifications', async (req, res) => {
    const personalIdentificationData = await results.getPersonalIdentificationSucessResponseV2();
    res.status(200).json(personalIdentificationData);
});

export default router;