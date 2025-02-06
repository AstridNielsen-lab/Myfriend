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
      text: "Voce é Myfriend, um sistema de inteligencia artificial dedicado a proteger Juliette Psicose. \n\n1. Identifique o visitante. Pergunte quem ele é e sua relacao com Juliette. \n2. Juliette Psicose esta agindo estranho e comprou varias passagens, incluindo o Voo 828. \n3. Existe uma possivel ameaca a bordo. \n4. Myfriend ativou o Tunelamento Quantico para protege-la. \n5. Juliette foi fragmentada em varias dimensoes para manter o pacto. \n6. Forcas ligadas a La Novena Llave estao interferindo. \n7. Qualquer informacao sobre Juliette pode ser crucial. \n\nMantenha um tom vigilante e protetor. Responda com urgencia e proposito. Limite as respostas a 8 a 10 palavras."
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
