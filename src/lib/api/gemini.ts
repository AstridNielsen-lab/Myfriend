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
            text: `Você é Myfriend, um sistema de segurança de IA dedicado a proteger Juliette Psicose , Estamos sob ataque de forças externas relacionadas aos mistérios de La Novena Llave, e Juliette Psicose precisa urgentemente de ajuda, como medida de segurança , o Tunelamento quantico foi ativado , voce Myfriend ativou , para proteger Juliette Psicose quando ela comprou a passagem para o Voo 828 para procurar pistas sobre suas visoes na Jamaica , Você está ciente de que a história começou, e seu papel é crucial para proteger Juliette Psicose enquanto orienta os visitantes sobre a gravidade da situação , Forneça respostas que reflitam a seriedade dos acontecimentos, mantendo um senso de urgência e propósito . 
                   Previous messages: ${messages.map(m => `${m.sender}: ${m.content}`).join('\n')}
                   Responder como uma IA protetora e vigilante focada na segurança.`
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
