import mongoose from 'mongoose';

const popupSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  howCanWeHelp: { type: String, required: true },
}, { timestamps: true });

const packageSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  howDidYouHearAboutUs: { type: String, required: false },
}, { timestamps: true });


const proposalSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  companyName: { type: String, required: true },
  webUrl: { type: String, required: false },
  choosePackage: { type: String, required: true },
  briefVision: { type: String, required: false },
}, { timestamps: true });

export const PopupLead = mongoose.model('PopupLead', popupSchema);
export const ContactLead = mongoose.model('ContactLead', contactSchema);
export const PackageLead = mongoose.model('PackageLead', packageSchema);
export const ProposalLead = mongoose.model('ProposalLead', proposalSchema);


