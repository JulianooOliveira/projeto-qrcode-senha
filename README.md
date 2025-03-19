# Projeto Gerador de QR Code/Senha

## 📌 Explicação

Neste projeto, utilizamos boas práticas de arquitetura de desenvolvimento, além de organizar o código de forma modular e reutilizável. O objetivo é permitir a geração rápida e eficiente de **QR Codes** e **senhas aleatórias**, garantindo flexibilidade e segurança.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **dotenv** (para configuração de variáveis de ambiente)
- **chalk** (para estilizar a saída no terminal)
- **prompt** (para interatividade no terminal)
- **QRCode Generator** (para geração de QR Codes)

## ⚙️ Como Usar?

1. Clone o repositório e acesse a pasta do projeto:
    ```sh
      git https://github.com/JulianooOliveira/projeto-qrcode-senha.git
      cd projeto-qrcode-senha
   
2. Instale as dependências:
    ```sh
      npm install
   
3. Crie um arquivo .env com as configurações:
    ```sh
      UPPERCASE_LETTERS= #true/false
      LOWERCASE_LETTERS= #true/false
      NUMBERS= #true/false
      SPECIAL_CHARACTERS= #true/false
      PASSWORD_LENGTH= #quantidade de caracteres

4. Execute o projeto:
   ```sh
     npm run start

5. Escolha uma opção no terminal:
    ```sh
      1 → Gerar um QR Code
      2 → Gerar uma senha segura


### Organização do código
  ```sh
    📦 MeuProjeto
    ├── 📂 services               → Serviços do sistema
    │   ├── 📂 password           → Módulo para geração de senhas
    │   │   ├── create.js
    │   │   ├── handle.js
    │   │   ├── 📂 utils
    │   │   │   ├── permitted-characters.js
    │   ├── 📂 qr-code            → Módulo para geração de QR Codes
    │   │   ├── create.js
    │   │   ├── handle.js
    ├── 📂 prompts-schema          
    │   ├── schema-main.js
    │   ├── schema-qrcode.js
    ├── .env                       
    ├── .gitignore                 
    ├── index.js                   
    ├── package.json               
    ├── package-lock.json          
    ├── README.md


    
