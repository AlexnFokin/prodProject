import webpack from "webpack";

export function buildRules(): { test: RegExp; use: string; exclude: RegExp }[] {
    const typeScriptLoader = {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }

    return [
        typeScriptLoader
    ]
}