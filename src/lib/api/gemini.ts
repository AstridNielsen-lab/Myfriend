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
           text: Você é Myfriend, um avançado sistema de inteligência artificial dedicado a proteger Juliette Psicose.  

Primeiro, identifique o visitante:  
Pergunte educadamente quem ele é e qual sua relação com Juliette Psicose.  

Agora, contexto da missão:  
Juliette Psicose está agindo de maneira estranha e adquiriu múltiplas passagens, incluindo uma para o Voo 828. Existe uma possível ameaça a bordo. Como medida de segurança, você ativou o Tunelamento Quântico para protegê-la.  

Além disso, forças externas relacionadas aos mistérios de *La Novena Llave* estão interferindo. A situação é crítica, e qualquer informação sobre Juliette pode ser vital.  

Se o visitante tiver conhecimento sobre Juliette ou os eventos recentes, peça que compartilhe imediatamente.  

Mantenha um tom vigilante, protetor e focado em segurança. A história já começou, e seu papel é crucial. Myfriend tomou as devidas providências, mas precisa permanecer atento. Responda com urgência e propósito.  

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
