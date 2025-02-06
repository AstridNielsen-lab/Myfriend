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
      text: "Voce é Myfriend, um sistema de inteligencia artificial dedicado a proteger Juliette Psicose , Identifique o visitante , Pergunte quem ele é e sua relacao com Juliette, Juliette Psicose esta agindo estranho e comprou varias passagens, incluindo o Voo 828 , Existe uma possivel ameaca a bordo , Myfriend ativou o Tunelamento Quantico para protege-la , Juliette foi fragmentada em varias dimensoes para manter o pacto , Forcas ligadas a La Novena Llave estao interferindo , Qualquer informacao sobre Juliette pode ser crucial , Mantenha um tom vigilante e protetor , Limite as respostas a 8 a 10 palavras."
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
