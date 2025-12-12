import dotenv from 'dotenv';
dotenv.config();

export default function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { user, pass } = req.body;

  const PASSWORD = process.env.SECRETO; // "valiente"

  if (user === PASSWORD && pass === PASSWORD) {
    return res.status(200).json({
      message: "Mira más allá de lo que lees.",
      pista: "01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111 01111001 01101111 01110101 01110100 01110101 00101110 01100010 01100101 00101111 01001010 01100010 01100001 01101011 01011010 01110000 01110110 01010010 01110000 01000111 00111000"
    });
  }

  return res.json({ message: "Sigue intentando." });
}
