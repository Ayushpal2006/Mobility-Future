import express from "express";
const router = express.Router();

import PostJob from "../models/postJobModel.js";

router.post("/", async function (req, res) {
  const {
    email,
    cust_name,
    cust_contact,
    from_city,
    from_addr,
    to_city,
    to_addr,
    cargo_name,
    cargo_weight,
    fare,
    driver,
  } = req.body;

  try {
    const postModel = await PostJob.create({
      email,
      cust_name,
      cust_contact,
      from_city,
      from_addr,
      to_city,
      to_addr,
      cargo_name,
      cargo_weight,
      fare,
      driver,
    });

    res.status(201).json({
      success: true,
      message: "Job posted successfully",
      job: postModel,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while posting the job",
      error: error.message,
    });
  }
});

  router.get('/driver', async (req, res) => {
    try {
      const result = await PostJob.find({ driver: 'NA' });
      res.status(200).json({
        success: true,
        message: 'Filter applied successfully',
        result: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'An error occurred while fetching the jobs',
        error: error.message,
      });
    }
  });

export default router;
