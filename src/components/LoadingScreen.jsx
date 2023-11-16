import { useRef } from 'react'
import LOGO_IMAGE from '../assets/logo.png'
import { useLayoutEffect } from 'react'

const LoadingScreen = () => {
    const containerRef = useRef(null)

    useLayoutEffect(() => {
        if (!containerRef.current) {
            return
        }
        let timeout = 1000
        for (let item of containerRef.current.children) {
            for (let element of item.children) {
                setTimeout(() => {
                    element.style.display = "block"
                }, timeout)
                timeout += 50 + 100 * Math.random()
            }
            timeout += 800
        }
        timeout += 1000
        setTimeout(() => {
            containerRef.current.style.display = "none"
        }, timeout)
    }, [containerRef])

    return (
        <div ref={containerRef} className="loading-screen-container">
            <div className="loading-screen-header">
                <img src={LOGO_IMAGE} alt="logo" />
                <span>起動中</span>
            </div>
            <div className="loading-screen-info">
                <div>KERNEL VERSION: 0.13.5 / EXPERIMENTAL</div>
                <div>OS VERSION: 1.134.15 / STABLE</div>
                <div>CHIPSET MODEL: AS-1437M</div>
            </div>
            <div className="loading-screen-info">
                <div>LOADING MEMORY PROFILE</div>
                <div>CHOSEN PROFILE: ARMEMIUS</div>
                <div>LOADING DATA FROM DISK</div>
                <div>READY</div>
            </div>
            <div className="loading-screen-info">
                <div>SERIAL ID: A48B9-15GG2-9EPO6-ARMEMIUS-Q1H5O</div>
            </div>
            <div className="loading-screen-info">
                <div>BOOTING UP</div>
            </div>
        </div>
    )
}

export default LoadingScreen
