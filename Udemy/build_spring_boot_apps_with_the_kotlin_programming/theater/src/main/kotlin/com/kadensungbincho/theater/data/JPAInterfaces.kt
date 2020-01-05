package com.kadensungbincho.theater.data

import com.kadensungbincho.theater.domain.Seat
import org.springframework.data.jpa.repository.JpaRepository

interface SeatRepository: JpaRepository<Seat, Long>
