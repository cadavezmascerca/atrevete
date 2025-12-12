import dotenv from 'dotenv';
dotenv.config();

export default function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { user, pass } = req.body;

  const usuarioCorrecto = "valiente";  // AHORA EL USUARIO ES "valiente"
  const claveReal = process.env.SECRETO;  // CONTRASEÑA = valiente

  if (user === usuarioCorrecto && pass === claveReal) {
    return res.json({ message: "Acceso concedido" });
  }

  return res.json({ message: "Acceso incorrecto" });
}
