import express from 'express';
import { 
  PopupLead, 
  ContactLead, 
  PackageLead, 
  ProposalLead 
} from '../models/FormModels';

const router = express.Router();

// 1. Popup Form
router.post('/popup', async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const newLead = new PopupLead({ phoneNumber });
    await newLead.save();
    res.status(201).json({ success: true, message: 'Popup lead saved successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. Contact Form
router.post('/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, howCanWeHelp } = req.body;
    const newContact = new ContactLead({ firstName, lastName, email, phoneNumber, howCanWeHelp });
    await newContact.save();
    res.status(201).json({ success: true, message: 'Contact message saved successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. Packages Form
router.post('/packages', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, howDidYouHearAboutUs } = req.body;
    const newPackageLead = new PackageLead({ fullName, email, phoneNumber, howDidYouHearAboutUs });
    await newPackageLead.save();
    res.status(201).json({ success: true, message: 'Package lead saved successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 4. Proposal Form
router.post('/proposal', async (req, res) => {
  try {
    const { fullName, email, phoneNumber, companyName, webUrl, choosePackage, briefVision } = req.body;
    const newProposal = new ProposalLead({ fullName, email, phoneNumber, companyName, webUrl, choosePackage, briefVision });
    await newProposal.save();
    res.status(201).json({ success: true, message: 'Proposal request saved successfully' });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
