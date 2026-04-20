/*
 * <license header>
 */

import React, { useState, useEffect } from 'react'
import { attach } from "@adobe/uix-guest"
import {
  Flex,
  Provider,
  Content,
  defaultTheme,
  Heading,
  View,
  Picker,
  Item
} from '@adobe/react-spectrum'

import { extensionId } from "./Constants"

export default function CreateNewPageModal() {
  // Fields
  const [guestConnection, setGuestConnection] = useState()

  useEffect(() => {
    (async () => {
      const guestConnection = await attach({ id: extensionId })

      setGuestConnection(guestConnection)
    })()
  }, [])

  const onCloseHandler = () => {
    guestConnection.host.modal.close()
  }

  return (
    <Provider theme={defaultTheme} colorScheme='light'>
      <Content width="100%">
        <View paddingX="size-300" paddingY="size-200" width="100%">
          <Flex
            direction="column"
            width="100%"
            gap="size-300"
            alignItems="stretch"
          >
            <Heading level={3} margin={0}>
              Select page options
            </Heading>
            <Picker
              label="Page template"
              placeholder="Select…"
              width="90%"
            >
              <Item key="highlight">Highlight</Item>
            </Picker>
          </Flex>
        </View>
      </Content>
    </Provider>
  )
}
