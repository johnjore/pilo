import { lockKeyboard } from './lock-keyboard'
import { startVideo } from './video'
import { startControls } from './controls'
import { version, repository } from '../../package.json'
import log from './log'

log.info(`Welcome to Pilo v${version}! Please report any bugs on the <a href="${repository}">GitHub repo</a>.`)

lockKeyboard()
startVideo()
startControls()
