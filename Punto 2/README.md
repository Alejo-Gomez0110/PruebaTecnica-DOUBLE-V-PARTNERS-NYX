# Playwright OpenCart E2E

Automatización E2E para https://opencart.abstracta.us usando Playwright con Page Object Model en JavaScript.

## Requisitos
- Node.js 18+ 

## Instalación

```bash
npm install
npm run install:playwright
```

## Ejecutar tests

- Ejecutar todos los tests (headless):
```bash
npm test
```

- Ejecutar en modo mostrado (headed):
```bash
npm run test:headed
```

- Abrir reporte HTML:
```bash
npm run report
```

Los videos/screeenshots y traces se guardarán en `test-results/` o en la carpeta que Playwright gestione. El reporte HTML se genera en `playwright-report/`.
