package main

import (
	"fmt"
	"net/http"
	"log"
	"io/ioutil"
	"encoding/json"
	"database/sql"
	_ "github.com/lib/pq"
)

type Result struct {
	Success bool `json:"success"`
	Reseason string `json:"reseason"`
}

const (
	host = "localhost"
	port = 54321
	user = "postgres"
	password = "password"
	dbname = "postgres"
)
var db *sql.DB
var psqlInfo string

func init() {
	psqlInfo = fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", host, port, user, password, dbname)
	var err error
	db, err = sql.Open("postgres", psqlInfo)
	if err != nil {
		log.Printf("open db err %s", err)
	}
	err = db.Ping()
	if err != nil {
		log.Printf("ping db err %s", err)
	} else {
		log.Println("ping db successfully!")
	}

}

func main() {
	http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request){
		w.Header().Set("Access-Control-Allow-Origin", "*")             //允许访问所有域
		w.Header().Add("Access-Control-Allow-Headers", "Content-Type") //header的类型
		w.Header().Set("content-type", "application/json")             //返回数据格式是json
		fmt.Println(r.Method)
		if r.Method == "POST" {
			res, err := ioutil.ReadAll(r.Body)
			r.Body.Close()
			log.Printf("from %s \n", res)
			if err != nil {
				http.Error(w, http.StatusText(500), 500)
			} else {
				result := Result{}
				result.Success = true
				result.Reseason = "ok"
				fmt.Println(result)
				if err1 := json.NewEncoder(w).Encode(&result); err1 != nil {
					http.Error(w, http.StatusText(500), 500)
				}
			}
		}

	})
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request){
		fmt.Fprintf(w, "helloworld")

	})
	http.ListenAndServe(":9000", nil)
}