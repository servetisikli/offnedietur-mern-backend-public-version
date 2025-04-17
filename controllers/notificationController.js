import Notification from "../models/NotificationModel.js";

// Create a new notification
export const createNotification = async (req, res) => {
  const { user, message } = req.body;

  try {
    const notification = new Notification({
      user,
      message,
    });

    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get notifications for a user
export const getNotifications = async (req, res) => {
  const { userId } = req.params;

  try {
    const notifications = await Notification.find({ user: userId });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mark a notification as read
export const markAsRead = async (req, res) => {
  const { notificationId } = req.params;

  try {
    const notification = await Notification.findById(notificationId);
    if (!notification) {
      return res.status(404).json({ error: "Notification not found" });
    }

    notification.read = true;
    await notification.save();
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};