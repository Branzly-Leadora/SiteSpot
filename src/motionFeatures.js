// Framer Motion's animation engine, split into its own chunk.
//
// Importing `motion.*` pulls the whole feature set (layout projection, drag,
// gestures, animations) into the main bundle, where it blocks first paint. With
// LazyMotion + `m` components the main bundle only carries the tiny renderer
// core and this chunk is fetched right after mount — animations light up a few
// hundred ms later, which nobody sees because they are all entrance/hover
// effects anyway.
//
// domMax (not domAnimation) because the nav island relies on `layout`.
import { domMax } from 'framer-motion'

export default domMax
