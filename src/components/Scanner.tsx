import { useEffect } from "react";
import Quagga, { QuaggaJSResultCallbackFunction } from "@ericblade/quagga2";
import { Video } from "../styles"
import { ValidateIsbn } from "../helpers";

export const Scanner = () => {

    const onDetected: QuaggaJSResultCallbackFunction = result => {
        Quagga.offDetected(onDetected)

        const isbn = result.codeResult.code

        if (!isbn) {
            alert('isbn nulo')
            return
        }

        const valid = ValidateIsbn(isbn)

        if (valid) {
            alert(isbn)
            return
        }

        alert('isbn não é valido')
        Quagga.onDetected(onDetected)
    }

    useEffect(() => {
        if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
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
                if (err) {
                    alert("Erro ao usar a camera: " + err);
                    console.log(err)
                    return
                }
                Quagga.start()
            })

            Quagga.onDetected(onDetected)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Video id='video' />
    )
}
