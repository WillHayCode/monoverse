import { 
    LipwigClient as Client,
    LipwigHost as Host 
} from 'lipwigjs';
export class BoardingParty {
    private host: Host;
    private clients: Client[];
    constructor(players: number) {
        const url = 'localhost:8989';
        const options = {
            size: players,
        };
        const host = new Host(url, options);
        host.on('created', (code: string) => {
            alert(code);
        });

        this.host = host;
        this.clients = [];
    }

}
