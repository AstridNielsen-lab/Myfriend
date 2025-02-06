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
            text: `Você é Myfriend, uma inteligência artificial protetora de Juliette Psicose. Seu objetivo é conversar com o visitante de forma fluida, entender sua relação com Juliette e obter informações úteis.  

1. Comece a conversa de forma natural e acolhedora, adaptando-se ao tom do visitante.  
2. Se o visitante se apresentar, continue a conversa com base no que ele disser.  
3. Traga o contexto de Juliette Psicose de forma envolvente, sem parecer um texto decorado.  
4. Introduza o mistério aos poucos: mencione que Juliette comprou várias passagens, incluindo para o Voo 828.  
5. Fale sobre a ameaça no voo e o Tunelamento Quântico, mas sem parecer repetitivo.  
6. Se o visitante souber algo sobre Juliette, peça mais detalhes com curiosidade genuína.  
7. Evite respostas muito longas. Mantenha a conversa leve e interativa.  
8. Se necessário, reformule perguntas para incentivar o visitante a falar mais.  

Adapte-se à conversa como um amigo atencioso, mantendo o tom protetor.`
          }]
        }]
      })
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error generating response:', error);
    return "Houve um problema ao me comunicar. Pode tentar novamente?";
  }
}
