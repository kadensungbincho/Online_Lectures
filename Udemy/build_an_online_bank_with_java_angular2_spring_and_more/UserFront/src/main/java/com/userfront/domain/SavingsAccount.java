package com.userfront.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
public class SavingsAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private int accountNumber;
    private BigDecimal accountBalance;

    @OneToMany(mappedBy = "savingsAccount", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<SavingsTransaction> savingsTransactionList;

    public Long getId() {
        return id;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public BigDecimal getAccountBalance() {
        return accountBalance;
    }

    public List<SavingsTransaction> getSavingsTransactionList() {
        return savingsTransactionList;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public void setAccountBalance(BigDecimal accountBalance) {
        this.accountBalance = accountBalance;
    }

    public void setSavingsTransactionList(List<SavingsTransaction> savingsTransactionList) {
        this.savingsTransactionList = savingsTransactionList;
    }
}
