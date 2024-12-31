# Usa uma imagem oficial do Node.js
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o package.json e package-lock.json para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código para o container
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando padrão para rodar a aplicação
CMD ["tail", "-F", "/dev/null"]
