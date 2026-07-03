// Service worker simples — permite instalar o app no celular.
// Não faz cache agressivo pra sempre pegar dados de corrida atualizados.
self.addEventListener("install", (e)=> self.skipWaiting());
self.addEventListener("activate", (e)=> self.clients.claim());
self.addEventListener("fetch", (e)=>{
  // deixa passar direto pra rede (app depende de dados ao vivo)
});
