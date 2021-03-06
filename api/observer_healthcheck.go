package api

import (
	"github.com/gin-gonic/gin"
	"github.com/trustwallet/blockatlas/services/observer/healthcheck"
	"net/http"
)

func GetObserverStatus(c *gin.Context) {
	exclude := splitParam(c.Query("exclude"))
	c.JSON(http.StatusOK, healthcheck.GetStatus(exclude))
}
