const designSystemStylesheet = document.createElement("link");
designSystemStylesheet.rel = "stylesheet";
designSystemStylesheet.href = "assets/design-system.css?v=20261025-whatsapp-v5";
document.head.append(designSystemStylesheet);

const brandLogos = document.querySelectorAll(
  'img[alt="Biblioteca Visual Pequenas Descobertas"]',
);
brandLogos.forEach((logo, index) => {
  logo.src = "assets/brand-logo.svg";
  logo.removeAttribute("srcset");
  logo.alt = "Berçário Descomplicado";
  logo.classList.add("brand-logo");
  if (index === 0) logo.loading = "eager";
});

const heroMockup = document.querySelector(
  'img[alt="Mockup da Biblioteca Visual Pequenas Descobertas"]',
);
if (heroMockup) {
  heroMockup.src = "assets/mockup-biblioteca-visual.png";
  heroMockup.removeAttribute("srcset");
  heroMockup.removeAttribute("sizes");
  heroMockup.width = 1254;
  heroMockup.height = 1254;
  heroMockup.alt = "Mockup da Biblioteca Visual Berçário Descomplicado";
  heroMockup.classList.add("hero-product-mockup");
}

const materialsMockup = document.querySelector(
  'img[alt="Mockup do material principal da biblioteca visual"]',
);
if (materialsMockup) {
  materialsMockup.src = "assets/mockup-biblioteca-visual-leque.png";
  materialsMockup.removeAttribute("srcset");
  materialsMockup.removeAttribute("sizes");
  materialsMockup.width = 1448;
  materialsMockup.height = 1086;
  materialsMockup.alt =
    "Mockup em leque da Biblioteca Visual Berçário Descomplicado";
  materialsMockup.classList.add("materials-product-mockup");
}

const offerMockup = document.querySelector(
  'img[alt="Imagem de referência da oferta completa"]',
);
if (offerMockup) {
  offerMockup.src = "assets/mockup-oferta-completa.png";
  offerMockup.removeAttribute("srcset");
  offerMockup.removeAttribute("sizes");
  offerMockup.width = 1254;
  offerMockup.height = 1254;
  offerMockup.alt =
    "Mockup da oferta completa Biblioteca Visual Berçário Descomplicado";
  offerMockup.classList.add("offer-product-mockup");
  offerMockup.style.width = "min(100%, 23rem)";
  offerMockup.style.height = "auto";
}

const orderBumpMockup = document.querySelector(
  'img[alt="Imagem de referência da seção de diferenciais"]',
);
if (orderBumpMockup) {
  orderBumpMockup.src = "assets/mockup-orderbumps.png";
  orderBumpMockup.removeAttribute("srcset");
  orderBumpMockup.removeAttribute("sizes");
  orderBumpMockup.width = 1688;
  orderBumpMockup.height = 932;
  orderBumpMockup.alt =
    "Mockup dos order bumps do Berçário Descomplicado";
  orderBumpMockup.classList.add("order-bump-product-mockup");
  orderBumpMockup.style.width = "100%";
  orderBumpMockup.style.height = "auto";
}

const offerSection = document.getElementById("oferta");
if (offerSection) {
  const offerHeading = offerSection.querySelector("h2");
  if (offerHeading) offerHeading.textContent = "Escolha o pacote ideal para você";

  const offerCards = offerSection.querySelectorAll(".mt-8.grid > div");
  const simpleCard = offerCards[0];
  const completeCard = offerCards[1];

  if (simpleCard) {
    const title = simpleCard.querySelector("h3");
    const description = title?.nextElementSibling;
    const price = simpleCard.querySelector("p.mt-4.text-5xl");
    const button = simpleCard.querySelector("a");

    if (title) {
      const simpleMockup = document.createElement("img");
      simpleMockup.src = "assets/mockup-pacote-simples.png";
      simpleMockup.alt =
        "Mockup do Pacote Simples da Biblioteca Visual Berçário Descomplicado";
      simpleMockup.width = 1254;
      simpleMockup.height = 1254;
      simpleMockup.loading = "lazy";
      simpleMockup.decoding = "async";
      simpleMockup.className = "mx-auto mb-4 w-full animate-float-soft";
      simpleMockup.style.maxWidth = "23rem";
      simpleMockup.style.height = "auto";
      simpleCard.insertBefore(simpleMockup, title);
    }

    if (title) title.textContent = "Pacote Simples";
    if (description) {
      description.textContent = "A Biblioteca Visual com todo o conteúdo principal.";
    }
    if (price) {
      price.textContent = "R$ 10";
      price.setAttribute("aria-label", "Pacote simples por dez reais");
    }
    if (button) button.textContent = "QUERO O PACOTE SIMPLES";
  }

  if (completeCard) {
    const badge = completeCard.querySelector("span.absolute");
    const title = completeCard.querySelector("h3");
    const description = title?.nextElementSibling;
    const priceBox = completeCard.querySelector("div.mt-4");
    const priceLabel = priceBox?.querySelector("span:first-child");
    const price = priceBox?.querySelector("span:last-child");
    const button = completeCard.querySelector("#super-oferta-btn a");
    const checkoutNote = completeCard.querySelector("#checkout-pendente");
    const buttonNote = completeCard.querySelector("#super-oferta-btn p");

    if (badge) {
      const labelNode = [...badge.childNodes].find(
        (node) => node.nodeType === Node.TEXT_NODE,
      );
      if (labelNode) labelNode.nodeValue = " MAIS VENDIDO";
    }
    if (title) title.textContent = "Pacote Completo";
    if (description) {
      description.textContent =
        "Biblioteca Visual com a experiência completa do Berçário Descomplicado.";
    }
    if (priceLabel) {
      priceLabel.textContent = "Por apenas";
      priceLabel.classList.remove("line-through");
    }
    if (price) {
      price.textContent = "R$ 27";
      price.setAttribute("aria-label", "Pacote completo por vinte e sete reais");
    }
    if (button) button.textContent = "QUERO O PACOTE COMPLETO";
    if (checkoutNote) checkoutNote.textContent = "Pagamento único e acesso digital.";
    if (buttonNote) {
      buttonNote.textContent = "Acesso liberado após a confirmação do pagamento.";
    }
  }
}

document.body.classList.add("kv-design-system");
const mainContent = document.querySelector("main");
if (mainContent) {
  mainContent.id = "conteudo-principal";
  const skipLink = document.createElement("a");
  skipLink.className = "skip-link";
  skipLink.href = "#conteudo-principal";
  skipLink.textContent = "Pular para o conteúdo";
  document.body.prepend(skipLink);
}

const themeColor = document.createElement("meta");
themeColor.name = "theme-color";
themeColor.content = "#FEFCF3";
document.head.append(themeColor);

const whatsappButton = document.createElement("a");
whatsappButton.className = "whatsapp-fab";
whatsappButton.href =
  "https://wa.me/5541996996906?text=Ol%C3%A1%21%20Fiquei%20com%20uma%20d%C3%BAvida%20sobre%20a%20Biblioteca%20Visual.";
whatsappButton.target = "_blank";
whatsappButton.rel = "noopener noreferrer";
whatsappButton.setAttribute(
  "aria-label",
  "Ficou com dúvida? Entre em contato agora mesmo pelo WhatsApp",
);
whatsappButton.innerHTML = `
  <span class="whatsapp-fab__icon" aria-hidden="true">
    <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M19.44 4.552A10.413 10.413 0 0 0 12.044 1.5C6.281 1.5 1.59 6.168 1.588 11.906a10.341 10.341 0 0 0 1.396 5.203L1.5 22.5l5.543-1.447a10.483 10.483 0 0 0 4.997 1.266h.004c5.762 0 10.453-4.669 10.456-10.407a10.32 10.32 0 0 0-3.06-7.36Zm-7.396 16.01h-.004a8.706 8.706 0 0 1-4.423-1.205l-.317-.188-3.29.859.879-3.192-.207-.328a8.6 8.6 0 0 1-1.329-4.602c0-4.768 3.9-8.648 8.694-8.648a8.672 8.672 0 0 1 8.688 8.655c-.002 4.769-3.9 8.65-8.69 8.65Zm4.767-6.477c-.261-.13-1.547-.76-1.785-.847-.238-.086-.414-.13-.588.13-.174.261-.675.845-.827 1.02-.153.176-.305.195-.566.065-.261-.13-1.104-.404-2.102-1.29-.776-.69-1.3-1.541-1.453-1.801-.152-.26-.016-.402.115-.531.117-.117.26-.304.392-.456.13-.152.174-.26.26-.434.087-.173.044-.325-.02-.455-.066-.13-.589-1.41-.806-1.93-.213-.508-.428-.439-.588-.447-.152-.007-.328-.01-.501-.01a.962.962 0 0 0-.697.326c-.24.26-.914.89-.914 2.17 0 1.278.937 2.516 1.067 2.69.129.173 1.842 2.799 4.463 3.925.486.209.984.392 1.49.548.625.198 1.195.17 1.645.103.502-.075 1.546-.63 1.764-1.237.217-.607.217-1.127.152-1.236-.065-.108-.24-.174-.501-.303Z" clip-rule="evenodd"></path>
    </svg>
  </span>
  <span class="whatsapp-fab__copy">
    <strong>Ficou com dúvida?</strong>
    <span>Entre em contato agora mesmo</span>
  </span>
  <span class="whatsapp-fab__arrow" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  </span>
`;
document.body.append(whatsappButton);

const faq = {
  "O material é físico ou digital?":
    "O material é 100% digital. Você recebe 331 arquivos em PDF e pode abrir pelo celular ou computador, além de imprimir quando fizer sentido para sua rotina.",
  "Para quem a biblioteca foi criada?":
    "Para professoras, auxiliares e profissionais que atuam com bebês e crianças pequenas em berçários, creches e turmas de maternal.",
  "O que exatamente eu recebo?":
    "Você recebe 331 experiências completas, cada uma em um PDF individual e acompanhada de uma ilustração exclusiva que representa visualmente a proposta.",
  "Preciso imprimir os PDFs?":
    "Não. Você pode consultar tudo diretamente na tela. Se preferir, pode imprimir apenas as experiências que deseja levar para o planejamento ou compartilhar com a equipe.",
  "As propostas são difíceis de aplicar?":
    "Não. As experiências foram organizadas em etapas claras para facilitar a compreensão, a preparação e a condução com as crianças.",
  "Como cada experiência é organizada?":
    "Cada PDF apresenta a proposta em uma sequência de etapas, inclui possíveis ações das crianças ou falas do professor quando necessário e orienta o momento de finalização.",
  "Posso adaptar as propostas para a minha turma?":
    "Sim. A biblioteca funciona como um repertório: você escolhe a experiência e adapta materiais, duração, espaço e nível de participação conforme a idade, os interesses e as necessidades do grupo.",
};

document.querySelectorAll("button[aria-expanded]").forEach((button, index) => {
  const answer = document.createElement("p");
  answer.className = "px-5 pb-5 text-sm text-muted-foreground";
  answer.textContent = faq[button.textContent.trim()] || "";
  answer.hidden = true;
  answer.id = `faq-${index}`;
  button.setAttribute("aria-controls", answer.id);
  button.after(answer);
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    answer.hidden = open;
    button.querySelector("svg").style.transform = open ? "" : "rotate(180deg)";
  });
});

const activityCovers = [
  [
    "assets/activity-covers/001-brincadeiras-com-as-partes-do-corpo.jpg",
    "Brincadeiras com as partes do corpo",
  ],
  [
    "assets/activity-covers/002-meu-nome-minha-identidade.jpg",
    "Meu nome, minha identidade",
  ],
  [
    "assets/activity-covers/003-brincadeiras-musicais.jpg",
    "Brincadeiras musicais",
  ],
  [
    "assets/activity-covers/004-experiencias-com-esponjas.jpg",
    "Experiências com esponjas",
  ],
  [
    "assets/activity-covers/005-o-desenho-e-o-corpo.jpg",
    "O desenho e o corpo",
  ],
  [
    "assets/activity-covers/006-brincando-com-cantigas-de-rodas-conhecidas.jpg",
    "Brincando com cantigas de rodas conhecidas",
  ],
  [
    "assets/activity-covers/007-adaptacao-brincadeira-com-producao-de-massinha.jpg",
    "Adaptação: brincadeira com produção de massinha",
  ],
  [
    "assets/activity-covers/008-brincadeiras-com-musicas-de-tradicao-oral.jpg",
    "Brincadeiras com músicas de tradição oral",
  ],
  [
    "assets/activity-covers/009-movimento-sonoro.jpg",
    "Movimento sonoro",
  ],
  [
    "assets/activity-covers/010-brincando-com-a-historia-dos-tres-porquinhos.jpg",
    "Brincando com a história dos Três Porquinhos",
  ],
];

const activityCoverImages = document.querySelectorAll(
  'img[alt^="Exemplo de atividade"]',
);
activityCoverImages.forEach((image, index) => {
  const [src, title] = activityCovers[index % activityCovers.length];
  image.src = src;
  image.removeAttribute("srcset");
  image.alt = `Exemplo de atividade ${String((index % 10) + 1).padStart(3, "0")} — ${title}`;
});

const sample = activityCoverImages[0];
let slide = 0;
if (sample) {
  const track = sample.parentElement;
  const wrap = track.parentElement;
  function paint() {
    track.style.transform = `translateX(${wrap.clientWidth / 2 - 144 - slide * 304}px)`;
  }
  paint();
  addEventListener("resize", paint);
  setInterval(() => {
    slide += 1;
    if (slide === 10) {
      track.style.transition = "none";
      slide = 0;
      paint();
      requestAnimationFrame(() => {
        track.style.transition = "transform 700ms ease-in-out";
      });
    } else {
      track.style.transition = "transform 700ms ease-in-out";
      paint();
    }
  }, 3000);
}

const dots = [...document.querySelectorAll('button[aria-label^="Ir para depoimento"]')];
let testimony = 0;
function showTestimony(index) {
  testimony = index;
  const image = document.querySelector('img[alt="Depoimento de cliente 1"]');
  if (image) image.parentElement.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, dotIndex) => {
    dot.className =
      "h-2.5 rounded-full transition-all " +
      (dotIndex === index ? "w-6 bg-primary" : "w-2.5 bg-primary/30");
  });
}
dots.forEach((dot, index) => dot.addEventListener("click", () => showTestimony(index)));
setInterval(() => showTestimony((testimony + 1) % 3), 7000);

