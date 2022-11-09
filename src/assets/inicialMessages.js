export const inicialMessages = [
    {
      id: `Fulano-${Math.ceil(Math.random() * 100000)}`,
      sender: "Fulano",
      content: "Hello",
      currentDate: new Date()
        .toLocaleTimeString(
          "en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true
        }
        )
    }, 
    {
      id: `Fulano-${Math.ceil(Math.random() * 100000)}`,
      sender: "Me",
      content: "World",
      currentDate: new Date()
      .toLocaleTimeString(
        "en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      }
      )
    }
  ]