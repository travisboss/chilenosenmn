public static ClientResponse SendSimpleMessage() {
  Client client = Client.create();
  client.addFilter(new HTTPBasicAuthFilter("api", "f8c83d5017f289b5a122873b4fe802cd-6b60e603-8d93f263"));
  WebResource webResource = client.resource("https://api.mailgun.net/v3/sandbox658f645769024d0082888c70e31a5de9.mailgun.org/messages");
  MultivaluedMapImpl formData = new MultivaluedMapImpl();
  formData.add("from", "Mailgun Sandbox <postmaster@sandbox658f645769024d0082888c70e31a5de9.mailgun.org>");
  formData.add("to", "Travis Boss <travisboss@gmail.com>");
  formData.add("subject", "Hello Travis Boss");
  formData.add("text", "Congratulations Travis Boss, you just sent an email with Mailgun!  You are truly awesome!");
  return webResource
      .type(MediaType.APPLICATION_FORM_URLENCODED)
      .post(ClientResponse.class, formData);
}
// You can see a record of this email in your logs: https://app.mailgun.com/app/logs

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10,000 emails/month for free.
