﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using web_api.Data;

namespace web_api.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20191127162323_initialCreate")]
    partial class initialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("web_api.Models.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("age")
                        .HasColumnType("int");

                    b.Property<string>("firstName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("lastName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<byte[]>("passwordHash")
                        .HasColumnType("longblob");

                    b.Property<byte[]>("passwordSalt")
                        .HasColumnType("longblob");

                    b.Property<string>("sex")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("userName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("admins");
                });

            modelBuilder.Entity("web_api.Models.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("AdminId")
                        .HasColumnType("int");

                    b.Property<string>("name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.HasIndex("AdminId");

                    b.ToTable("categories");
                });

            modelBuilder.Entity("web_api.Models.Customer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("adminId")
                        .HasColumnType("int");

                    b.Property<int>("age")
                        .HasColumnType("int");

                    b.Property<string>("firstName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("lastName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<byte[]>("passwordHash")
                        .HasColumnType("longblob");

                    b.Property<byte[]>("passwordSalt")
                        .HasColumnType("longblob");

                    b.Property<string>("sex")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("userName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.HasIndex("adminId");

                    b.ToTable("customers");
                });

            modelBuilder.Entity("web_api.Models.Food", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("CategoryId")
                        .HasColumnType("int");

                    b.Property<int>("SellerId")
                        .HasColumnType("int");

                    b.Property<string>("name")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<double>("price")
                        .HasColumnType("double");

                    b.HasKey("Id");

                    b.HasIndex("CategoryId");

                    b.HasIndex("SellerId");

                    b.ToTable("foods");
                });

            modelBuilder.Entity("web_api.Models.History", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("history");
                });

            modelBuilder.Entity("web_api.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .HasColumnType("int");

                    b.Property<int>("CutomerId")
                        .HasColumnType("int");

                    b.Property<double>("Total")
                        .HasColumnType("double");

                    b.Property<int?>("customerId")
                        .HasColumnType("int");

                    b.Property<DateTime>("date")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.HasIndex("customerId");

                    b.ToTable("orders");
                });

            modelBuilder.Entity("web_api.Models.OrderFood", b =>
                {
                    b.Property<int>("OrderId")
                        .HasColumnType("int");

                    b.Property<int>("FoodId")
                        .HasColumnType("int");

                    b.Property<int>("Qty")
                        .HasColumnType("int");

                    b.HasKey("OrderId", "FoodId");

                    b.HasIndex("FoodId");

                    b.ToTable("orderFoods");
                });

            modelBuilder.Entity("web_api.Models.Payment", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("CustomerId")
                        .HasColumnType("int");

                    b.Property<int>("historyId")
                        .HasColumnType("int");

                    b.Property<DateTime>("payDate")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("historyId");

                    b.ToTable("payments");
                });

            modelBuilder.Entity("web_api.Models.Seller", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int>("adminId")
                        .HasColumnType("int");

                    b.Property<int>("age")
                        .HasColumnType("int");

                    b.Property<string>("firstName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("lastName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<byte[]>("passwordHash")
                        .HasColumnType("longblob");

                    b.Property<byte[]>("passwordSalt")
                        .HasColumnType("longblob");

                    b.Property<string>("sex")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("userName")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.HasIndex("adminId");

                    b.ToTable("sellers");
                });

            modelBuilder.Entity("web_api.Models.SellerOrder", b =>
                {
                    b.Property<int>("sellerId")
                        .HasColumnType("int");

                    b.Property<int>("orderId")
                        .HasColumnType("int");

                    b.HasKey("sellerId", "orderId");

                    b.HasIndex("orderId");

                    b.ToTable("sellerOrders");
                });

            modelBuilder.Entity("web_api.Models.Category", b =>
                {
                    b.HasOne("web_api.Models.Admin", "admin")
                        .WithMany()
                        .HasForeignKey("AdminId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("web_api.Models.Customer", b =>
                {
                    b.HasOne("web_api.Models.Admin", "admin")
                        .WithMany("customerList")
                        .HasForeignKey("adminId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("web_api.Models.Food", b =>
                {
                    b.HasOne("web_api.Models.Category", "category")
                        .WithMany("foodList")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("web_api.Models.Seller", "seller")
                        .WithMany("foodList")
                        .HasForeignKey("SellerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("web_api.Models.Order", b =>
                {
                    b.HasOne("web_api.Models.Customer", "customer")
                        .WithMany("orderList")
                        .HasForeignKey("customerId");
                });

            modelBuilder.Entity("web_api.Models.OrderFood", b =>
                {
                    b.HasOne("web_api.Models.Food", "food")
                        .WithMany("orderFoods")
                        .HasForeignKey("FoodId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("web_api.Models.Order", "order")
                        .WithMany("orderFoods")
                        .HasForeignKey("OrderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("web_api.Models.Payment", b =>
                {
                    b.HasOne("web_api.Models.Customer", "customer")
                        .WithMany()
                        .HasForeignKey("CustomerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("web_api.Models.History", "history")
                        .WithMany("payments")
                        .HasForeignKey("historyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("web_api.Models.Seller", b =>
                {
                    b.HasOne("web_api.Models.Admin", "admin")
                        .WithMany("sellerList")
                        .HasForeignKey("adminId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("web_api.Models.SellerOrder", b =>
                {
                    b.HasOne("web_api.Models.Order", "order")
                        .WithMany("sellerList")
                        .HasForeignKey("orderId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("web_api.Models.Seller", "seller")
                        .WithMany("orderList")
                        .HasForeignKey("sellerId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
