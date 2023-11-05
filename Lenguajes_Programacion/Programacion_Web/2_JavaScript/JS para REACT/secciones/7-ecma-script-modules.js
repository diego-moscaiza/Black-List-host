/* ----- 7.-  MODULOS DE ECMA SCRIPT (ES MODULES)------- */

export function suma(a, b) {
    return ""
}

export function otraFuncion() {
    return ""
}

export default function resta(a, b) {
    return ""
}

// Se importan las funciones

import { suma, otraFuncion} from './suma'
import resta from './resta'

function calculadora () {
    suma();

    resta();
}

// COMO SE USA EN REACT --->

// Con esta linea se puede llamar a cada funcion de React sin poner 'React' al inicio
import React, {useState, useEffect, Fragment} from 'react'

// Esto es declarando cada funcion por separado
React.useState,
React.useEffect,
React.Fragment