# JVM & Co. — recuperação dos arquivos públicos

Cópia dos arquivos do site fornecidos em `www.jvmco.com.br (1).zip`, adicionada manualmente à conta Charlie Brownie.

## Estado da recuperação

- Os arquivos do domínio `www.jvmco.com.br` presentes no ZIP são preservados byte a byte.
- Imagens e endpoints públicos ausentes no ZIP foram recuperados do site em produção, quando acessíveis, sem modificar os arquivos enviados.
- Arquivos de outros domínios (Google e Kaspersky) não fazem parte dos arquivos do site e não foram importados.
- O HTML enviado contém uma referência a um script do Kaspersky inserido na captura. Ela foi mantida para preservar o arquivo original; a captura não deve ser tratada como uma exportação limpa do projeto.

## Limitação para a migração

Este repositório contém uma captura do site publicado: HTML, CSS, JavaScript compilado e recursos públicos. O ZIP não contém o código-fonte Next.js, `package.json`, lockfile nem o histórico Git original.

A captura não inclui o serviço `/_next/image` da Vercel, nem comprova o funcionamento do formulário, cookies, políticas e hidratação React em outra hospedagem. Ter os arquivos públicos salvos não significa que o projeto Next.js tenha sido migrado.

Não foram criadas configurações de build ou deploy substitutas, nem alterados os domínios, DNS ou a produção. Antes de publicar este repositório no lugar do projeto atual, recuperar o source do deployment Vercel ou outra cópia do projeto original e validar todas as funções.

`migration/public-assets.json` registra os downloads complementares. `migration/files.json` registra os hashes dos arquivos salvos.

