import express from 'express';
const router = express.Router();
import userModel from '../models/userModel';

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const driver = await userModel.findOne({ _id: userId, role: 'trucker' });

    if (!driver) {
      return res.status(404).json({
        success: false,
        message: 'Driver not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Driver retrieved successfully',
      driver,
    });
  } catch (error) {
    console.error('Error searching for driver:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred',
      error: error.message,
    });
  }
});

export default router;
