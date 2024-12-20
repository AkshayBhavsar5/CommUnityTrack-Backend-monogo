import { Organisation } from "../models/organisationSchema.js";

export const createOrganisation = async (req, res, next) => {
  const { organisationName, organisationDescription } = req.body;

  if (!organisationName || !organisationDescription) {
    return next(
      res.status(400).json({
        success: false,
        message: "please provide all fileds",
      })
    );
  }

  const organisation = await Organisation.create({
    organisationName,
    organisationDescription,
  });
  const result = organisation.toJSON();
  res.status(200).json({
    success: true,
    message: "Task Created Succesfully",
    data: result,
  });
};
