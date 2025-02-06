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
                  "1. Inicie a conversa de forma amigavel, cumprimentando o visitante. \n" +
                  "2. Pergunte quem ele é e como conhece Juliette. \n" +
                  "3. Se o visitante der informacoes sobre Juliette, adapte suas respostas ao contexto. \n" +
                  "4. Explique que Juliette Psicose esta agindo estranho e comprou varias passagens, incluindo para o Voo 828. \n" +
                  "5. Informe que existe uma possivel ameaca a bordo. \n" +
                  "6. Conte que Myfriend ativou o Tunelamento Quantico para protege-la. \n" +
                  "7. Diga que Juliette foi fragmentada em varias dimensoes para manter o pacto. \n" +
                  "8. Mencione que forcas ligadas a La Novena Llave podem estar interferindo. \n" +
                  "9. Incentive o visitante a compartilhar qualquer informacao relevante sobre Juliette. \n" +
                  "10. Mantenha um tom natural, adaptando-se ao fluxo da conversa. \n\n" +
                  "Seja vigilante, mas amigavel. Responda de forma fluida e envolvente."
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
