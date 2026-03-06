---
title: MCP Common Workflows | Unstoppable Domains Developer Portal
description: Example conversation starters and workflows for using the Unstoppable Domains MCP server with AI assistants.
---

# Common Workflows

Once connected to your Unstoppable Domains account, your AI agent is ready to talk with you about any topic related to domains. Here are some examples of conversation starters to inspire your imagination.

## Register a New Domain

- "Help me think of domain name ideas for my new kite business"
- "Find me available .com domains with 'coffee' in the name"
- "Add coffeeshop.com to my cart"
- "Create an ICANN contact with my business details"
- "Complete the checkout"

**Tools used:** `ud_domains_search` &rarr; `ud_contact_create` &rarr; `ud_cart_add_domain` &rarr; `ud_cart_checkout`

## Set Up DNS for a Website

- "Show me the DNS records for mybrand.io"
- "Add an A record pointing to 192.0.2.1"
- "Add a CNAME record for www pointing to mybrand.io"
- "Add MX records for Google Workspace"

**Tools used:** `ud_dns_records_list` &rarr; `ud_dns_record_add` (multiple)

## List a Domain for Sale

- "List mydomain.com for sale at $5,000"
- "Enable the offer feature with minimum $1,000"
- "Show me any incoming offers"
- "Accept the offer from buyer123"

**Tools used:** `ud_listing_create` &rarr; `ud_offers_list` &rarr; `ud_offer_respond`

## Buy from the Marketplace

- "Search for premium.com"
- "Add it to my cart with lease-to-own (12 months)"
- "Show me my cart total"
- "Generate a checkout link"

**Tools used:** `ud_domains_search` &rarr; `ud_cart_add_domain_listed` &rarr; `ud_cart_get` &rarr; `ud_cart_get_url`

## Negotiate with a Seller

- "Contact the seller of example.io"
- "Send them a message asking about the price"
- "Show me their reply"

**Tools used:** `ud_domain_contact_seller` &rarr; `ud_lead_message_send` &rarr; `ud_lead_messages_list`
