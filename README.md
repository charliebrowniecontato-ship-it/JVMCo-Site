# JVM & Co. — versão publicada recuperada

Recuperação manual do site público para `charliebrowniecontato-ship-it/JVMCo-Site`, sem recriação do design.

## Publicação

A Vercel publica a branch `main`. `node scripts/build.mjs` copia os arquivos públicos para `dist/`, sem transpilar, minificar ou transformar seu conteúdo. Não há dependências de instalação.

O HTML, CSS e JavaScript são os arquivos exatos recuperados de `https://www.jvmco.com.br/`. Fontes, imagens, favicon, robots, sitemap e Open Graph também estão no repositório. A rota `/_next/image` serve a foto local de João Valentim; não depende da hospedagem antiga. A foto usa o arquivo original em vez da otimização dinâmica de tamanho.

## Correção do arquivo enviado

O ZIP enviado continha JavaScript e CSS reformatados, apesar de manter os nomes de arquivos imutáveis usados no site original. Alguns JavaScripts tinham sintaxe alterada e inválida. A Vercel recusou essa captura com `IMMUTABLE_STATIC_HASH_MISMATCH`.

Os arquivos foram substituídos pelos bytes originais disponibilizados na produção. O HTML recuperado diretamente da produção também elimina o script de antivírus injetado na captura enviada. Os arquivos recebidos originalmente continuam preservados no histórico Git, no commit `cfec3d7d1272ef14fc59be4c8bd697ee4ac9a95d`.

## Escopo e limites

Esta é a recuperação da versão compilada publicada, com seu HTML e componentes JavaScript existentes. Não recupera o código-fonte Next.js, o histórico Git da Legacy ou a configuração do projeto Vercel original. Não há um build Next.js: há um build de publicação estática.

O formulário existente valida os dados no navegador e prepara uma conversa no WhatsApp; não há backend de leads a migrar nesta versão. Políticas e preferências de cookies usam os componentes originais.

Os domínios oficiais e o DNS não são alterados por esta configuração. Sua transferência deve ocorrer somente após validar o deployment de destino. URLs canônicas, OG Image e sitemap continuam apontando para o domínio oficial existente.

`migration/production-recovery.json` registra a recuperação dos arquivos originais. `migration/files.json` registra os hashes dos arquivos atuais.
