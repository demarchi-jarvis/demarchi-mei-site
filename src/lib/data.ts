export const SITE_URL = "https://www.demarchi.tec.br";
export const WHATSAPP_NUMBER = "5524998435335";
export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, Antonio! Vim pelo site e gostaria de solicitar um diagnóstico gratuito para minha empresa."
);

export const SERVICOS = [
  {
    slug: "cloud-computing-aws",
    titulo: "Cloud Computing AWS",
    subtitulo: "Infraestrutura escalável que cresce com o seu negócio",
    descricao:
      "Migre sua empresa para a nuvem com segurança e previsibilidade de custos. Implementamos e gerenciamos ambientes AWS (EC2, RDS, S3, Lambda, ECS) com monitoramento 24/7 via Prometheus e Grafana. Sua aplicação fica disponível mesmo nos picos de acesso, sem surpresas na fatura.",
    beneficios: [
      "Redução de até 40% em custos de infraestrutura",
      "Uptime de 99,9% com arquitetura multi-AZ",
      "Escalabilidade automática em horários de pico",
      "Backups automatizados e recuperação de desastres",
    ],
    palavrasChave: [
      "Cloud AWS Vassouras",
      "Migração para nuvem Barra do Piraí",
      "Infraestrutura cloud Vale do Café",
    ],
    icone: "☁️",
  },
  {
    slug: "backend-dotnet",
    titulo: "Desenvolvimento Backend .NET",
    subtitulo: "APIs robustas e sistemas que funcionam no padrão dos grandes bancos",
    descricao:
      "Construímos sistemas e APIs com C# e .NET Core no padrão de qualidade exigido por empresas como Itaú e Rede Globo. Arquitetura limpa, CQRS, testes automatizados e documentação completa. Seu sistema entregado com a mesma rigidez técnica das maiores corporações do Brasil.",
    beneficios: [
      "Código documentado e testado (TDD/BDD)",
      "APIs RESTful com autenticação JWT e segurança corporativa",
      "Integração com bancos de dados relacionais e NoSQL",
      "Microsserviços com mensageria RabbitMQ",
    ],
    palavrasChave: [
      "Desenvolvimento de sistemas Vassouras",
      "Criação de API .NET Sul Fluminense",
      "Software personalizado Barra do Piraí",
    ],
    icone: "⚙️",
  },
  {
    slug: "devops-aws",
    titulo: "DevOps & Automação AWS",
    subtitulo: "Do código ao ar em minutos, com zero downtime",
    descricao:
      "Implantamos pipelines CI/CD com GitHub Actions, containerização Docker/Kubernetes e Infraestrutura como Código (Terraform). Sua equipe para de fazer deploy manual às 23h e começa a entregar software com confiança. Observabilidade completa com alertas antes que o cliente perceba o problema.",
    beneficios: [
      "Deploy automatizado sem intervenção manual",
      "Rollback em segundos em caso de falha",
      "Infraestrutura versionada e reproduzível (IaC)",
      "Alertas proativos antes da queda do sistema",
    ],
    palavrasChave: [
      "DevOps Vassouras RJ",
      "CI/CD automação Sul Fluminense",
      "Kubernetes AWS Barra do Piraí",
    ],
    icone: "🚀",
  },
  {
    slug: "seguranca-de-dados",
    titulo: "Segurança de Dados & LGPD",
    subtitulo: "Proteja sua empresa antes da multa chegar",
    descricao:
      "Experiência comprovada em Blue Team na Rede Globo. Auditamos sua infraestrutura, identificamos vulnerabilidades, implementamos controles de acesso (IAM, JWT, WAF) e preparamos sua empresa para conformidade com a LGPD. A proteção que sua empresa precisa para operar com tranquilidade.",
    beneficios: [
      "Diagnóstico completo de vulnerabilidades",
      "Conformidade LGPD documentada e auditável",
      "Controles de acesso e criptografia de dados sensíveis",
      "Treinamento da equipe em boas práticas de segurança",
    ],
    palavrasChave: [
      "Segurança de dados Vassouras",
      "LGPD empresa Barra do Piraí",
      "Consultoria segurança TI Vale do Café",
    ],
    icone: "🔒",
  },
];

export const CIDADES = [
  {
    slug: "vassouras",
    nome: "Vassouras",
    estado: "RJ",
    lat: -22.4033,
    lng: -43.6622,
    descricao:
      "Atendimento presencial e remoto para empresas no Centro de Vassouras, proximidades da Universidade de Vassouras (USS), Madruga e toda a região.",
    referencia: "próximo à Universidade de Vassouras (USS) e Centro Histórico",
    bairros: ["Centro", "Madruga", "Jardim Amália", "Bairro Santa Rosa"],
  },
  {
    slug: "barra-do-pirai",
    nome: "Barra do Piraí",
    estado: "RJ",
    lat: -22.47,
    lng: -43.8275,
    descricao:
      "Consultoria de TI no Centro de Barra do Piraí, SESI, SENAI e toda a região industrial do Vale do Café.",
    referencia: "Centro de Barra do Piraí e polo industrial da região",
    bairros: ["Centro", "Califórnia", "São Luís", "Vila Elmira"],
  },
  {
    slug: "mendes",
    nome: "Mendes",
    estado: "RJ",
    lat: -22.5239,
    lng: -43.7319,
    descricao:
      "Atendimento remoto e visitas técnicas para empresas em Mendes e municípios vizinhos do Sul Fluminense.",
    referencia: "Mendes e região",
    bairros: ["Centro", "Bairro Novo"],
  },
  {
    slug: "paulo-de-frontin",
    nome: "Paulo de Frontin",
    estado: "RJ",
    lat: -22.5483,
    lng: -43.6803,
    descricao:
      "Suporte técnico e consultoria para o comércio e pequenas indústrias de Paulo de Frontin.",
    referencia: "Paulo de Frontin e Vale do Café",
    bairros: ["Centro"],
  },
];

export const DEPOIMENTOS = [
  {
    nome: "Marcos Ferreira",
    empresa: "Ferreira & Associados Contabilidade — Vassouras",
    texto:
      "Depois do diagnóstico gratuito, descobrimos que estávamos pagando por serviços em nuvem que nem usávamos. O Antonio reduziu nossa fatura de TI em 38% e ainda deixou tudo mais rápido.",
    estrelas: 5,
  },
  {
    nome: "Ana Claudia Ramos",
    empresa: "Clínica Saúde Integrada — Barra do Piraí",
    texto:
      "Nossa clínica ficou 6 horas sem sistema em pleno dia de trabalho. Após contratar a Demarchi MEI, tivemos zero quedas nos últimos 8 meses. Vale cada centavo do investimento.",
    estrelas: 5,
  },
  {
    nome: "Roberto Alves",
    empresa: "Distribuidora Centro-Sul — Vassouras",
    texto:
      "Precisávamos integrar o sistema de notas fiscais com nosso ERP. Em 3 semanas o Antonio entregou a solução documentada e funcionando. Equipe de TI do Itaú mesmo.",
    estrelas: 5,
  },
];
