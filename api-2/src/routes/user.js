import {Router} from 'express';
import User from "../models/userModel.js";

const router = Router();

router.post('/users', async (req, res) => {
  try {
    const { name, age, email } = req.body;
    const newUser = new User({ name, age, email });
    await newUser.save();
    res.status(202).json(newUser);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const data = await User.findById(id);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

export default router;