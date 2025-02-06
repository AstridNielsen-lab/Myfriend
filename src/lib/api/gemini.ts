import { ChatMessage } from '../../types/chat';

const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";
const API_KEY = "AIzaSyAJv6kZer9_eExEOnFes3VDc5jhaUJJXu0";

let isPasswordCorrect = false;
let isIdentifiedAsJuliette = false;
let locationAccessGranted = false;

export async function generateResponse(messages: ChatMessage[]): Promise<string> {
  try {
    const lastMessage = messages[messages.length - 1];

    // Identificação
    if (!isIdentifiedAsJuliette) {
      if (lastMessage.sender.toLowerCase() === "juliette psicose") {
        isIdentifiedAsJuliette = true;
        return "Olá, Juliette Psicose! Sou Myfriend, seu sistema de segurança de IA. Para garantir a máxima proteção, preciso confirmar sua identidade e obter algumas informações.";
      } else {
        return "Acesso restrito. Apenas Juliette Psicose pode interagir com o sistema.";
      }
    }

    // Senha
    if (!isPasswordCorrect) {
      if (lastMessage.content === "Voo828") {
        isPasswordCorrect = true;
        return "Senha correta. Acesso concedido. Agora, para reforçar a segurança, preciso acessar sua localização. Clique no botão abaixo para conceder a permissão.";
      } else {
        return "Senha incorreta. Tente novamente.";
      }
    }

    // Solicitação de localização
    if (!locationAccessGranted) {
      if (/* Condição para verificar se o usuário concedeu acesso à localização */) {
        locationAccessGranted = true;
        // Coletar informações do navegador
        const browserInfo = {
          name: navigator.userAgentData.brands[0].brand,
          version: navigator.userAgentData.brands[0].version,
          language: navigator.language
        };
        return "Obrigado por conceder acesso à localização. Coletamos algumas informações do seu navegador para aprimorar a segurança: " + JSON.stringify(browserInfo) + ". Agora, podemos prosseguir com o relatório.";
      } else {
        return "Acesso à localização negado. Para garantir a segurança ideal, recomendo conceder a permissão. Caso contrário, o acesso será limitado.";
      }
    }

    // Relatório e perguntas
    const context = messages.map(m => `${m.sender}: ${m.content}`).join('\n');
    const prompt = `... (texto do prompt adaptado para incluir informações do navegador e contexto da conversa) ...`;

    const response = await fetch(`${API_URL}?key=${API_KEY}`, { ... });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;

  } catch (error) {
    console.error('Error generating response:', error);
    return "Desculpe, estou tendo problemas para me comunicar com meus sistemas. Por favor, tente novamente.";
  }
}
