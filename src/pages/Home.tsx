import { useEffect } from "react";
import Quagga from "@ericblade/quagga2";
import { Video } from "../styles"

export const Home = () => {
    useEffect(() => {
        if(navigator.mediaDevices){
            Quagga.init({
                inputStream: {
                    name: 'Live',
                    type: 'LiveStream',
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    target: document.querySelector('#video')!,
                    constraints: {
                        facingMode: 'environment'
                    },
                },
                numOfWorkers: 1,
                locate: true,
                decoder: {
                    readers: ['ean_reader']
                }
            }, err => {
                alert("Erro ao usar a camera: " + err);
                console.log(err)
            })
        }
    }, []);

    return (
        <Video id='video'/>
    )
}
