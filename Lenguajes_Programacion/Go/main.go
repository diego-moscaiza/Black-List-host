package main

import (
	"fmt"
	"github.com/google/uuid"
)


func main() {
	//fmt.Println("Hello Word")
	fmt.Println(uuid.New().String())
}

