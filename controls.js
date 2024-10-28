const client = new Paho.MQTT.Client('broker.hivemq.com', Number(8000), "icesiuserA00395902");
const topic = "icesitel";

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const container = document.getElementById('container');

//Listener de mensajes
client.onMessageArrived = (msg) => {
    console.log("Arrived!: "+msg.payloadString);
    container.innerHTML = container.innerHTML + `<p>${msg.payloadString}</p>`;
}

//Función para conectarse al broker
client.connect(
    {
        onSuccess:() => {
            console.log("conectado!")
            client.subscribe(topic);
        }
    }
);

//Función para enviar un mensaje a un topic
const sendMessage = (msj) => {
    let message = new Paho.MQTT.Message(msj);
    message.destinationName = topic;
    client.send(message);
};

sendButton.addEventListener('click', (event)=>{
    event.preventDefault();
    let messageText = messageInput.value;
    alert(messageText)
});