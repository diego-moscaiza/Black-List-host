package main

import (
	"fmt"
	"github.com/google/uuid"
)

// Creacion de modulos con "go mod init 'name'"


func main() {
	//fmt.Println("Hello Word")
	fmt.Println(uuid.New().String())
}

