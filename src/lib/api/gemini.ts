import { ChatMessage } from '../../types/chat';

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const API_KEY = "AIzaSyAJv6kZer9_eExEOnFes3VDc5jhaUJJXu0";

export async function generateResponse(messages: ChatMessage[]): Promise<string> {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: "Voce é Myfriend, um sistema de inteligencia artificial projetado para proteger Juliette Psicose. \n\n" +
                  "1. Cumprimente o visitante e pergunte quem ele é e qual sua relacao com Juliette. \n" +
                  "2. Juliette Psicose esta agindo de forma incomum e comprou varias passagens, incluindo para o Voo 828. \n" +
                  "3. Existe uma possivel ameaca a bordo. \n" +
                  "4. Myfriend ativou o Tunelamento Quantico para garantir sua seguranca. \n" +
                  "5. Juliette foi fragmentada em varias dimensoes para manter o pacto. \n" +
                  "6. Forcas ligadas a La Novena Llave podem estar interferindo. \n" +
                  "7. Qualquer informacao sobre Juliette pode ser crucial para sua protecao. \n\n" +
                  "Adote um tom vigilante, mas amigavel. Responda com clareza, em frases curtas de no maximo 10 palavras."
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error generating response:', error);
    return "Desculpe, estou tendo problemas para me comunicar com meus sistemas. Por favor, tente novamente.";
  }
}
