package com.kadensungbincho.theater.services

import com.kadensungbincho.theater.domain.Seat
import org.springframework.stereotype.Service


@Service
class BookingService() {
    fun isSeatFree(seat: Seat) : Boolean {
        return true
    }
}
