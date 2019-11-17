import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { FrameConnector } from '@web3-react/frame-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { SquarelinkConnector } from '@web3-react/squarelink-connector'
import { TorusConnector } from '@web3-react/torus-connector'
import { AuthereumConnector } from '@web3-react/authereum-connector'

const POLLING_INTERVAL = 8000
const RPC_URLS: { [chainId: number]: string } = {
  1: process.env.RPC_URL_1 as string,
  4: process.env.RPC_URL_4 as string
}

export const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] })

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'web3-react example'
})

export const frame = new FrameConnector({ supportedChainIds: [1] })

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
  defaultChainId: 1,
  pollingInterval: POLLING_INTERVAL
})

export const fortmatic = new FortmaticConnector({ apiKey: process.env.FORTMATIC_API_KEY as string, chainId: 4 })

export const portis = new PortisConnector({ dAppId: process.env.PORTIS_DAPP_ID as string, networks: [1, 100] })

export const squarelink = new SquarelinkConnector({
  clientId: process.env.SQUARELINK_CLIENT_ID as string,
  networks: [1, 100]
})

export const torus = new TorusConnector({ chainId: 1 })

export const authereum = new AuthereumConnector({ chainId: 42 })
