import { Program } from 'pixi.js';
import { LightShader } from '../light/LightShader';
import { ambientFrag } from './ambient.frag';

/**
 * @memberof PIXI.lights
 */
export class AmbientLightShader extends LightShader
{
    constructor()
    {
        super({
            program: AmbientLightShader._program
        });
    }

    static _program = new Program(LightShader.defaultVertexSrc, ambientFrag);
}
