/**
 * Vectors in space.
 */
export class Vec {
    /**
     * @param {number} x
     * @param {number} y
     */
    constructor(x = 0.0, y = 0.0) {
        this._x = x;
        this._y = y;
    }

    /**
     * @return {number}
     */
    get x() {
        return this._x;
    }

    /**
     * @return {number}
     */
    get y() {
        return this._y;
    }

    /**
     * @return {number}
     */
    get mod() {
        if (this._mod === undefined) {
            this._mod = Math.sqrt(this._x * this._x + this._y * this._y);
        }
        return this._mod;
    }

    /**
     * Tell if this vector is equal to the given one.
     *
     * @param {Vec} ver
     * @return {boolean}
     */
    eq(ver) {
        return this._x === ver._x && this._y === ver._y;
    }

    /**
     * Return the versor of this vector.
     *
     * @return {Vec}
     */
    ver() {
        return new Vec(this._x / this.mod, this._y / this.mod);
    }

    /**
     * Divide this vector by the given scalar, and return the resulting vector.
     *
     * @param {number} scalar
     * @return {Vec}
     */
    over(scalar) {
        return new Vec(this._x / scalar, this._y / scalar);
    }

    /**
     * Multiply this vector times the given scalar, and return the resulting vector.
     *
     * @param {number} scalar
     * @return {Vec}
     */
    times(scalar) {
        return new Vec(this._x * scalar, this._y * scalar);
    }

    /**
     * Compose this vector with the given vector, and return the resulting vector.
     *
     * @param {Vec} vec
     * @return {Vec}
     */
     plus(vec) {
        return new Vec(this._x + vec._x, this.y + vec._y);
     }

     /**
      * Calculate the difference between this vector and the given one, and return the resulting vector.
      *
      * @param {Vec} vec
      * @return {Vec}
      */
      minus(vec) {
        return new Vec(this._x - vec.x, this._y - vec.y);
      }
}
