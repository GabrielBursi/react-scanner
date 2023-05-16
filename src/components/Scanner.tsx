import { useEffect } from "react";
import Quagga, { QuaggaJSResultCallbackFunction } from "@ericblade/quagga2";
import { Container, ScanMarker, Video } from "../styles"
import { ValidateIsbn } from "../helpers";
import scanMarker from '../images/scan-marker.png'

interface ScannerProps {
    onScan: (v: string) => void;
}

export const Scanner = ({onScan}: ScannerProps) => {

    const onDetected: QuaggaJSResultCallbackFunction = result => {
        Quagga.offDetected(onDetected)

        const isbn = result.codeResult.code

        if (!isbn) {
            alert('isbn nulo')
            return
        }

        const valid = ValidateIsbn(isbn)

        if (valid) {
            onScan(isbn)
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
        <>
            <Video id='video' />
            <Container>
                <ScanMarker>
                    <img
                        src={scanMarker}
                        alt="marca para leitura de código"
                        width="260"
                        height="260"
                    />
                    <p className="label">Aponte para o código de barras do livro</p>
                </ScanMarker>
                {/* img de logo */}
                <img
                    className="logo"
                    src=""
                    alt="logo"
                    width="137"
                    height="69"
                />
            </Container>
        </>
    )
}
