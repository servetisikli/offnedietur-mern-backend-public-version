import Ticket from "../models/TicketModel.js";

// Create a new ticket
export const createTicket = async (req, res) => {
  try {
    const { subject, message } = req.body;
    const newTicket = new Ticket({
      user: req.user._id,
      subject,
      message
    });
    await newTicket.save();
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user's tickets
export const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user._id })
      .sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tickets (admin only)
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({})
      .populate('user', 'firstName lastName email')
      .sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add response to ticket (admin only)
export const addResponse = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { message } = req.body;

    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    ticket.responses.push({
      admin: req.user._id,
      message
    });
    await ticket.save();

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Close ticket (admin only)
export const closeTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    ticket.status = "closed";
    await ticket.save();

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};